import { BsGithub } from "react-icons/bs";

const AboutPage = () => {
  return (
    <div className="m-auto flex h-[90%] w-[90%] flex-col gap-7 py-10 font-mono text-lg">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">About T-Type</h1>
        <p className="">
          T-Type is a sleek, minimalist typing speed tester crafted with React
          and Tailwind CSS, drawing inspiration from the popular{" "}
          <a
            href="http://www.monkeytype.com"
            target="_blank"
            className="hover:underline"
          >
            MonkeyType
          </a>
          . Designed to help you master the keyboard, T-Type offers a clean
          interface and insightful feedback on your typing performance. Sharpen
          your skills, track your progress, and become a typing pro with T-Type.
        </p>
      </div>
      <div className="mb-5 flex flex-col gap-3">
        <h2 className="text-2xl font-bold">Key improvements</h2>
        <ul className="list-inside list-none space-y-2">
          <li>
            <strong className="italic">Stronger call to action</strong>:
            "Sharpen your skills, track your progress, and become a typing pro
            with T-Type."
          </li>
          <li>
            <strong className="italic">Emphasis on user benefits</strong>:
            Highlights how the app helps users improve their typing.
          </li>
          <li>
            <strong className="italic">Concise and impactful language</strong>:
            Maintains the core message while being more engaging.
          </li>
        </ul>
      </div>

      <div className=" mt-auto flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <BsGithub className="text-xl font-bold" />
          <h2 className="text-xl font-bold">Source code:</h2>
          <a
            href="http://github.com/Thith-thith/T-Type"
            target="_blank"
            className="hover:underline"
            rel="noopener noreferrer"
          >
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
