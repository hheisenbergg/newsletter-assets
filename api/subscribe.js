export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ ok: false, status: 'error', message: 'Method not allowed' });
    }

    const { email } = req.body;

    // Validate email
    if (!email || typeof email !== 'string' || !email.includes('@')) {
        return res.status(400).json({ ok: false, status: 'invalid_email' });
    }

    const webhookUrl = process.env.SUBSCRIBE_WEBHOOK_URL;
    const username = process.env.WEBHOOK_AUTH_USER;
    const password = process.env.WEBHOOK_AUTH_SECRET;

    if (!webhookUrl) {
        console.error('SUBSCRIBE_WEBHOOK_URL not configured');
        return res.status(500).json({ ok: false, status: 'error' });
    }

    if (!username || !password) {
        console.error('WEBHOOK_AUTH_USER or WEBHOOK_AUTH_SECRET not configured');
        return res.status(500).json({ ok: false, status: 'error' });
    }

    // Create Basic Auth header
    const authString = Buffer.from(`${username}:${password}`).toString('base64');

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${authString}`
            },
            body: JSON.stringify({ email }),
        });

        // Check if webhook returned an error
        if (!response.ok) {
            console.error(`Webhook returned ${response.status}: ${response.statusText}`);
            return res.status(500).json({ ok: false, status: 'error' });
        }

        // Forward the response from the webhook
        let data = null;
        try {
            data = await response.json();
        } catch {
            data = null;
        }

        // If n8n didn't return valid JSON, treat as error
        if (!data || typeof data !== 'object') {
            console.error('Webhook returned invalid or empty response');
            return res.status(500).json({ ok: false, status: 'error' });
        }

        return res.status(200).json(data);

    } catch (error) {
        console.error('Webhook request failed:', error);
        return res.status(500).json({ ok: false, status: 'error' });
    }
}
