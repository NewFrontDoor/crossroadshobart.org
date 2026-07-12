export default function Navigation() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center gap-4 justify-between m-auto py-4 p-8">
        <a href="/">
          <img alt="Crossroads Presbyterian Church Logo" src="/crossroads.svg" />
        </a>
        <div className="flex items-center gap-6">
          <a href="/">Sunday Visit</a>
          <a href="/about">About</a>
          <a href="/jesus">Find out about Jesus</a>
          <a href="/contact-us">Contact Us</a>
        </div>
      </div>
    </header>
  );
}
