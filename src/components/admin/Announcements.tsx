const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-e-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Anuncios</h1>
        <span className="text-xs text-gray-400">Ver Mas</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorep ipsum dolr sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Volsas,
            expedia. Rerus, qusnd falis?
          </p>
        </div>
        <div className="bg-purple-100 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorep ipsum dolr sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Volsas,
            expedia. Rerus, qusnd falis?
          </p>
        </div>
        <div className="bg-yellow-100 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorep ipsum dolr sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Volsas,
            expedia. Rerus, qusnd falis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
