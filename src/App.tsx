function App() {
  return (
    <div className="px-8 py-12 desktop:py-24">
      <div className="mx-auto max-w-content">
        <div className="text-left">
          <h2 className="text-xs uppercase my-3">Siasky.net Customer Notice</h2>
          <h1 className="text-3xl desktop:text-4xl font-semibold">
            Siasky.net is Now Offline
          </h1>

          <p className="mt-6 text-palette-500">
            Due to{" "}
            <a
              href="https://skynetlabs.com/news/skynet-labs-shutting-down-skynet-remains-online/"
              className="text-primary"
              target="_blank"
            >
              the closure of Skynet Labs
            </a>
            , the{" "}
            <a href="https://siasky.net" className="text-primary">
              siasky.net
            </a>{" "}
            portal will no longer provide access to any content on Skynet.
          </p>

          <div className="mt-10 space-y-2">
            <h3 className="text-2xl font-bold">
              Can I use Skynet with an account?
            </h3>
            <p>
              Go to{" "}
              <a href="https://skynetfree.net" className="text-primary">
                skynetfree.net
              </a>{" "}
              to create a free account, or access your paid account by visiting{" "}
              <a href="https://skynetpro.net" className="text-primary">
                skynetpro.net
              </a>
              .
            </p>
          </div>

          <div className="mt-6 space-y-2">
            <h3 className="text-2xl font-semibold">
              Will my data uploaded to siasky.net be lost?
            </h3>
            <p>
              If files are not re-uploaded or re-pinned to Skynet using another
              portal, any file uploaded to siasky.net will eventually drop off
              the network.
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
