import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def handler(event: dict, context) -> dict:
    '''API для отправки заявок с формы обратной связи на email'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }

    try:
        body = json.loads(event.get('body', '{}'))
        
        name = body.get('name', '')
        company = body.get('company', '')
        email = body.get('email', '')
        phone = body.get('phone', '')
        message = body.get('message', '')

        if not all([name, company, email, phone]):
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Все обязательные поля должны быть заполнены'}),
                'isBase64Encoded': False
            }

        smtp_host = os.environ.get('SMTP_HOST')
        smtp_port = int(os.environ.get('SMTP_PORT', '465'))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        contact_email = os.environ.get('CONTACT_EMAIL')

        if not all([smtp_host, smtp_user, smtp_password, contact_email]):
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'SMTP настройки не настроены'}),
                'isBase64Encoded': False
            }

        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'Новая заявка с сайта ОфисДзен от {company}'
        msg['From'] = smtp_user
        msg['To'] = contact_email

        html_content = f"""
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background: linear-gradient(135deg, #86efac 0%, #a78bfa 100%); padding: 20px; text-align: center; }}
                .header h1 {{ color: white; margin: 0; }}
                .content {{ background: #f9f9f9; padding: 30px; border-radius: 8px; margin-top: 20px; }}
                .field {{ margin-bottom: 15px; }}
                .field-label {{ font-weight: bold; color: #555; }}
                .field-value {{ color: #333; margin-top: 5px; }}
                .footer {{ text-align: center; margin-top: 20px; color: #888; font-size: 12px; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>✉️ Новая заявка с сайта</h1>
                </div>
                <div class="content">
                    <div class="field">
                        <div class="field-label">👤 Имя:</div>
                        <div class="field-value">{name}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">🏢 Компания:</div>
                        <div class="field-value">{company}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">📧 Email:</div>
                        <div class="field-value"><a href="mailto:{email}">{email}</a></div>
                    </div>
                    <div class="field">
                        <div class="field-label">📱 Телефон:</div>
                        <div class="field-value"><a href="tel:{phone}">{phone}</a></div>
                    </div>
                    {f'''
                    <div class="field">
                        <div class="field-label">💬 Сообщение:</div>
                        <div class="field-value">{message}</div>
                    </div>
                    ''' if message else ''}
                </div>
                <div class="footer">
                    <p>Это письмо отправлено автоматически с сайта officedzen.ru</p>
                </div>
            </div>
        </body>
        </html>
        """

        html_part = MIMEText(html_content, 'html')
        msg.attach(html_part)

        with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
            server.login(smtp_user, smtp_password)
            server.send_message(msg)

        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.'
            }),
            'isBase64Encoded': False
        }

    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Неверный формат данных'}),
            'isBase64Encoded': False
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Ошибка отправки: {str(e)}'}),
            'isBase64Encoded': False
        }
