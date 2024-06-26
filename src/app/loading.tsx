// Next.js recommends using the '<Image />' component instead of the regular '<img>' HTML element to automatically optimize images, potentially improving LCP (Largest Contentful Paint) and overall page performance
import Image from "next/image";

// Root Loading Component wraps around all route files inside the application (after Root Layout Component)
// it allows you to create loading states that are rendered and displayed to users while a specific route's content is loading
const Loading = () => {
  return (
    <div className="flex justify-center">
      <Image src="spinner.svg" alt="Loading Spinner" width={250} height={250} />
    </div>
  );
};

export default Loading;
