import { RiReactjsLine } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiFirebase } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandJavascript className="text-6xl text-yellow-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-6xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiFirebase className="text-6xl text-orange-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-6xl text-green-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3 className="text-6xl text-blue-700" />
        </div>
      </div>
    </div>
  );
};
export default Technologies;
