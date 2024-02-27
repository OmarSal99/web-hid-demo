const showDevices = async () => {
  const opts = {
    filters: [],
  };
  const devices = await navigator.hid.requestDevice(opts);
  const myDevice = devices[0];
  console.log(myDevice);
  await myDevice.open();
  myDevice.addEventListener("inputreport", (event) => {
    onHIDEntry(event);
  });
};

document.getElementById("get-devices").addEventListener("click", showDevices);

const onHIDEntry = (event) => {
  const { data, device, reportId } = event;
  console.log(data.buffer);
  console.log("\n\n");
};
