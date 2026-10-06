// Setup the Footer component

// declare the function for the component
function Footer() {
  // return something for the component to render
  return (
    // one element does not require Fragment of a wrapper Parent element
    <p className="footer">
      &copy; {new Date().getFullYear()} Mael's React App.
    </p>
  );
}

// export the component
export default Footer;
