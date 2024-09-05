/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosAPI } from "@/utils/AxiosInstance";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { Helmet } from "react-helmet";
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill all fields!");
      return;
    }
    // Send form data to server
    setLoading(true);
    AxiosAPI.post("/notifications/contact_us", formData)
      .then((res) => {
        console.log(res.data);
        notifications.show({
          message: res.data.message,
          color: "green",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log("Error sending form data: ", err);
        notifications.show({
          message: err.message ?? err.response.message,
        });
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="w-full flex items-center justify-center p-6">
      <div className="w-full md:w-[60vw]">
        <h2 className="text-black text-3xl font-bold text-center mb-4">
          Any Insights? <br /> Feel Free To Contact Us
        </h2>
        <p className="w-full text-black text-center mb-8">
          Discover valuable insights and solutions tailored to your
          transportation needs. Contact us today to learn more about how we can
          streamline your journey and enhance your experience.
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full p-8 rounded-lg shadow-lg"
        >
          {error && (
            <p className="text-red-500 text-sm w-full text-center font-bold py-2">
              {error}
            </p>
          )}
          <div className="w-full flex justify-between gap-10">
            <div className="w-full mb-4">
              <label className="block text-sm mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e: any) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg focus:outline-none bg-gray-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="w-full mb-4">
              <label className="block text-sm mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e: any) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-300 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e: any) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 bg-gray-300 rounded-lg focus:outline-none"
              placeholder="Enter your message"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${loading ? "bg-blue-500" : "bg-blue-600"} text-white py-3 rounded-full hover:bg-blue-700 transition duration-300`}
          >
            {loading ? "Sending ..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};
const Contact = () => {
  return (
    <div className="px-10 min-h-screen pt-10 pb-[50vh]">
      <Helmet>
        <title>Contact Us - Place Pulse</title>
        <meta
          name="description"
          content="One Stop Collection For Cheap And Beautiful Accommodations"
        />
      </Helmet>
      <ContactForm />
    </div>
  );
};

export default Contact;
