export const metadata = {
  title: 'Nexora AI Chatbot',
  description: 'AI Chatbot with Gemini API',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
