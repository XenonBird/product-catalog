const About = () => {
  return (
    <main>
      <section className="container max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to FashionHub! We are your ultimate fashion destination,
          bringing you the latest trends and styles from around the world. Our
          mission is to help you express your unique personality through your
          fashion choices. Whether you&apos;re looking for casual wear or
          glamorous outfits, we&apos;ve got you covered.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          At FashionHub, we believe that fashion is more than just clothing;
          it&apos;s a form of self-expression. Our team of passionate fashion
          enthusiasts curates a collection that reflects diverse styles and
          preferences. We&apos;re here to make sure you always feel confident
          and stylish, no matter the occasion.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-2">
          If you have any questions, feedback, or just want to say hello, feel
          free to reach out to us!
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Email:{" "}
          <a
            className="underline text-blue-500"
            href="mailto:info@fashionhub.com"
          >
            info@fashionhub.com
          </a>
        </p>
        <p className="text-lg text-gray-700 mb-8">Phone: +1 (123) 456-7890</p>

        <h2 className="text-2xl font-semibold mb-4">Visit Our Stores</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
          <li>New York: 123 Fashion Avenue</li>
          <li>Los Angeles: 456 Style Street</li>
          <li>Miami: 789 Trendy Road</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
        <p className="text-lg text-gray-700 mb-2">
          Stay connected with us on social media to stay updated on the latest
          trends and promotions!
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>
            Follow us on{" "}
            <a href="#" className="underline text-blue-500">
              Facebook
            </a>
          </li>
          <li>
            Follow us on{" "}
            <a href="#" className="underline text-blue-500">
              Instagram
            </a>
          </li>
          <li>
            Follow us on{" "}
            <a href="#" className="underline text-blue-500">
              Twitter
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default About;
