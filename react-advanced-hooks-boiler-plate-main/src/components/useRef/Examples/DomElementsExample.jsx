import { useRef, useEffect } from "react";

export const DomElementsExample = () => {
  const content = {
    heading:
      "These examples showcase various ways useRef can be used to interact with and manipulate DOM elements directly within functional components in React. ",
  };
  // Example 1: Basic useRef to manipulate DOM directly
  // Creating a ref to hold the reference to the div element
  const basicRef = useRef();

  // ------
  // ------
  // ------

  // Example 2: Controlling input focus
  // Creating a ref to hold the reference to the input element
  const focusRef = useRef();

  // ------
  // ------
  // ------

  // Example 3: Changing innerHTML of an element
  // Creating a ref to hold the reference to the div element
  const htmlRef = useRef();

  // ------
  // ------
  // ------

  // Example 4: Changing the src of an image dynamically
  // Creating a ref to hold the reference to the img element
  const imageRef = useRef();

  // ------
  // ------
  // ------

  // Example 5: Smooth Scrolling to a Section
  // Creating a ref to hold the reference to the section element
  const sectionRef = useRef();

  const handleScrollToSection = () => 
    sectionRef.current.scrollIntoView({behavior: "smooth"});

    useEffect(() => {

    basicRef.current.style.backgroundColor = "red";

    focusRef.current.focus();

    htmlRef.current.innerHTML = `<strong>My inner text has been changed</strong>`;

    imageRef.current.src ="https://www.pixartprinting.es/blog/wp-content/uploads/2021/08/Cover_IKEA.jpg";
    imageRef.current.alt = "IKEA LOGOOOOO"

    sectionRef.current

  }, []);


  // Rendering the component
  return (
    <div>
      <h5>{content.heading}</h5>
      {/* Example 1: A div that will have its background color changed */}
      <div ref={basicRef} style={{ padding: "20px" }}>
        Example 1: My background color will change
      </div>
      {/* Example 2: An input field that will be auto-focused */}
      <input ref={focusRef} placeholder="Example 2: I'm focused" />
      {/* Example 3: A div that will have its innerHTML changed */}
      <div ref={htmlRef}>Example 3: Change my HTML</div>
      {/* Example 4: An image that will have its src attribute changed */}
      <img ref={imageRef} alt="Example 4" width="150" />
      {/* Example 5*/}
    

      <div>
        <button onClick={handleScrollToSection}>Scroll to Section</button>
              {/* Other content */}
              <div style={{ height: "100vh", backgroundColor: "lightblue" }}>
                Scroll past me!
              </div>

              {/* The section to scroll to */}
              <div
                ref={sectionRef}
                style={{ height: "100vh", backgroundColor: "lightcoral" }}
              >
                {`Hello, I'm the section to scroll to!`}
              </div>
            </div>
      </div>
  );
};
