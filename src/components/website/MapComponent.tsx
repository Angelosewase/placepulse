const MapComponent = ({ name }: { name: string }) => {
  return (
    <div className="w-full h-full rounded-[25px] border">
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.492804802289!2d30.060157276001828!3d-1.9563285367276746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca42ba4412995%3A0xeb7a3b7e5681a72d!2s${name}!5e0!3m2!1sen!2srw!4v1719925298218!5m2!1sen!2srw`}
        style={{
          border: "0",
          width: "100%",
          height: "100%",
          borderRadius: "25px",
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};
export default MapComponent;