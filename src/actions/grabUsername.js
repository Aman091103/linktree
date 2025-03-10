export default async function grabUsername(formData) {
  const response = await fetch('/api/grabUsername', {
    method: 'POST',
    body: JSON.stringify({
      username: formData.get('username')
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data.success;
}