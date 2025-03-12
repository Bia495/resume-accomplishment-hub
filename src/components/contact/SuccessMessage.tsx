
const SuccessMessage = () => (
  <div className="text-center py-8">
    <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h4 className="text-lg font-medium mb-2">Message Sent!</h4>
    <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you as soon as possible.</p>
  </div>
);

export default SuccessMessage;
