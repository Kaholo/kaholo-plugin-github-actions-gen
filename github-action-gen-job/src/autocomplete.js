async function getEnviorments(query) {
  const enviorments = [
    "windows-latest",
    "windows-2019",
    "ubuntu-20.04",
    "ubuntu-latest",
    "ubuntu-18.04",
    "ubuntu-16.04",
    "macos-11.0",
    "macos-latest",
    "macos-10.15",
  ];

  return enviorments
    .filter((env) => env.includes(query))
    .map((env) => {
      return { id: env, value: env };
    });
}

module.exports = {
  getEnviorments
};
