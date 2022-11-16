const hostname = window?.location?.hostname ?? "";
const domain = hostname.substring(
  hostname.lastIndexOf(".", hostname.lastIndexOf(".") - 1) + 1
);

function App() {
  return (
    <div className="px-8 py-12 desktop:py-24">
      <div className="mx-auto max-w-content">
        <div className="text-left">
          <h2 className="text-xs uppercase my-3">{domain} Customer Notice</h2>
          <h1 className="text-3xl desktop:text-4xl font-semibold">
            {domain} is now offline
          </h1>

          <p className="mt-6 text-palette-500 pb-10 border-b border-gray-300">
            Due to{" "}
            <a
              href="https://skynetlabs.com/news/skynet-labs-shutting-down-skynet-remains-online/"
              className="text-primary"
              target="_blank"
            >
              the closure of Skynet Labs
            </a>
            , the {domain} portal will no longer provide access to any content
            on Skynet.
          </p>

          <div className="mt-10 space-y-2">
            <h3 className="text-2xl font-bold">Can I still use Skynet?</h3>
            <p>
              Yes! While Skynet Labs Skynet portals have been shut down, Skynet
              network is still accessible through any other active Skynet
              portal.
            </p>
          </div>

          <div className="mt-10 space-y-2">
            <h3 className="text-2xl font-bold">
              What other Skynet portals are operating?
            </h3>
            <p>
              Go to{" "}
              <a href="https://web3portal.com" className="text-primary">
                web3portal.com
              </a>{" "}
              and create a free account to access all of Skynet content.
            </p>
          </div>

          <div className="mt-10 space-y-2">
            <h3 className="text-2xl font-bold">
              Will my data uploaded to {domain} be lost?
            </h3>
            <p>
              If files are not re-uploaded or re-pinned to Skynet using another
              portal, any file uploaded to {domain} will eventually drop off the
              network.
            </p>
          </div>

          <div className="mt-10 text-palette-300">
            Please reach out on the{" "}
            <a
              href="https://discord.com/invite/skynetlabs"
              className="text-primary"
              target="_blank"
            >
              Skynet Discord
            </a>{" "}
            for further support.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
