import { useEffect } from 'react';

export default function WebLoginPage() {
  useEffect(() => {
    window.location.href = 'https://app.t360.in/weblogin/';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to T360 Web App...</p>
      </div>
    </div>
  );
}
