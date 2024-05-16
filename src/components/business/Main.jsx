import { businessServices } from "../../data/business";

const Main = () => {
  return (
    <div className="px-5 py-20">
      <h2 className="text-center max-w-[900px] mx-auto text-lg text-gray-700">
        Zetta Techonologies Limited offers many different areas of home IT
        support, everything you could possibly need. Below is a list of some of
        the tech services that Zetta Techonologies Limited is able to provide.
        If you need anything that isn’t listed, just give us a call to discuss.
      </h2>
      <br />
      <br />

      <div className=" gap-8 w-full md:w-[80%] mx-auto custom-flex grid grid-cols-1 sm:grid-cols-2">
        {businessServices.map((service) => (
          <div
            key={service.id}
            className="border border-primary p-4 rounded-lg flex flex-col gap-5   hover:scale-90 transform transition-all duration-300 ease-in-out "
          >
            <service.icon size={42} strokeWidth={1} color="#fc4100" />
            <h2 className=" font-semibold text-xl text-secondary-100">
              {service.title}
            </h2>
            <p className="text-sm text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
