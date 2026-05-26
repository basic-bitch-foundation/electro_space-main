export default function Policy({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight mb-8 text-foreground pb-4 border-b border-border">{title}</h1>
      <div className="prose prose-invert prose-primary mx-auto text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

export function Privacy() {
  return (
    <Policy title="Privacy Policy">
      <p>Last updated: {new Date().toLocaleDateString('en-IN')}</p>
      <h3>1. Information We Collect</h3>
      <p>We collect information you provide directly to us when making a purchase, creating an account, or subscribing to our newsletter. This includes your name, email address, shipping address, and phone number. We do not store payment card details on our servers; all payments are processed securely through our payment gateway partners.</p>
      
      <h3>2. How We Use Your Information</h3>
      <p>We use the information we collect to process your orders, send shipping notifications, communicate about order issues, and (if opted in) send promotional emails about new components or tutorials.</p>
      
      <h3>3. Cookies</h3>
      <p>We use minimal cookies necessary for the website to function (like keeping your cart active) and basic analytics to understand which products are popular. We do not use aggressive tracking or sell your data to third-party ad networks.</p>
      
      <h3>4. Data Protection</h3>
      <p>Your data is stored securely. We take appropriate measures to protect against unauthorized access or alteration of your personal information.</p>
    </Policy>
  );
}

export function Terms() {
  return (
    <Policy title="Terms & Conditions">
      <p>Last updated: {new Date().toLocaleDateString('en-IN')}</p>
      <h3>1. General</h3>
      <p>By accessing and placing an order with Electrospace, you confirm that you are in agreement with and bound by the terms of service contained herein.</p>
      
      <h3>2. Product Information</h3>
      <p>We strive to ensure all product descriptions, images, and specifications are accurate. However, electronic components may occasionally vary slightly in appearance (e.g., PCB color) from the images shown, though functional specifications will remain identical.</p>
      
      <h3>3. Limitation of Liability</h3>
      <p>Electrospace shall not be liable for any damage to your equipment, property, or person arising from the use or misuse of the electronic components sold. Hardware development carries inherent risks; please exercise caution, especially when working with power modules and mains voltage.</p>
      
      <h3>4. Pricing</h3>
      <p>All prices are in Indian Rupees (INR) and are subject to change without notice. GST is applicable as per government regulations.</p>
    </Policy>
  );
}

export function Shipping() {
  return (
    <Policy title="Shipping Policy">
      <h3>Processing Time</h3>
      <p>All orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.</p>
      
      <h3>Shipping Rates & Estimates</h3>
      <p>We offer flat-rate shipping across India for ₹99. Orders typically arrive within 3-7 business days depending on your location. Metro cities usually see faster delivery times (2-4 days).</p>
      
      <h3>Logistics Partners</h3>
      <p>We partner with reliable courier services like Delhivery, BlueDart, and India Post to ensure your sensitive electronic components reach you safely.</p>
      
      <h3>Damaged Packages</h3>
      <p>If your package arrives damaged, please take photos before opening it and contact us immediately at ytpartnership2427@gmail.com with your order number.</p>
    </Policy>
  );
}

export function Refunds() {
  return (
    <Policy title="Refund & Cancellation Policy">
      <h3>Cancellation</h3>
      <p>You can cancel your order anytime before it has been dispatched from our workshop. Once dispatched, the order cannot be cancelled, but you may be eligible for a return.</p>
      
      <h3>Returns</h3>
      <p>We accept returns within 7 days of delivery only for items that are defective or damaged upon arrival. Due to the sensitive nature of electronic components (susceptibility to ESD and improper wiring), we cannot accept returns for components that have been soldered, modified, or damaged due to incorrect usage.</p>
      
      <h3>Process</h3>
      <p>To initiate a return, email us with your order number and a clear description (with photos/videos) of the defect. If approved, we will provide a return shipping address. We will inspect the returned item and, upon verification of the defect, issue a replacement or a full refund to your original payment method.</p>
    </Policy>
  );
}
