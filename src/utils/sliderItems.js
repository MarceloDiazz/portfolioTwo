import { CssSvg, FirebaseSvg, FlutterSvg, GitSvg, JavaScriptSvg, NodeSvg, ReactSvg, ReduxSvg, SvelteSvg, TailwindSvg, TypeScriptSvg } from "../img/svg/svg-projects";
import "../css/about.css"
export const firstSliderItems = [
    { name: "JavaScript", icon: <JavaScriptSvg />, className: "js" },
    { name: "ReactJS", icon: <ReactSvg />, className: "react" },
    { name: "Redux", icon: <ReduxSvg />, className: "redux" },
    { name: "TailwindCSS", icon: <TailwindSvg />, className: "tailwind" },
    { name: "Git", icon: <GitSvg />, className: "git" },
    { name: "CSS", icon: <CssSvg />, className: "css" },
    { name: "Svelte", icon: <SvelteSvg />, className: "svelte" }
  ];
  
  export const secondSliderItems = [
    { name: "ReactJS", icon: <ReactSvg />, className: "react" },
    { name: "NodeJS", icon: <NodeSvg />, className: "node" },
    { name: "TailwindCSS", icon: <TailwindSvg />, className: "tailwind" },
    { name: "Typescript", icon: <TypeScriptSvg />, className: "ts" },
    { name: "Redux", icon: <ReduxSvg />, className: "redux" },
    { name: "Flutter", icon: <FlutterSvg />, className: "flutter" },
    { name: "Git", icon: <GitSvg />, className: "git" }
  ];
  
  export const thirdSliderItems = [
    { name: "CSS", icon: <CssSvg />, className: "css" },
    { name: "Flutter", icon: <FlutterSvg />, className: "flutter" },
    { name: "JavaScript", icon: <JavaScriptSvg />, className: "js" },
    { name: "NodeJS", icon: <NodeSvg />, className: "node" },
    { name: "Svelte", icon: <SvelteSvg />, className: "svelte" },
    { name: "Firebase", icon: <FirebaseSvg />, className: "firebase" },
    { name: "Typescript", icon: <TypeScriptSvg />, className: "ts" }
  ];




  export const renderSlider = (items, duration, direction) => (
    <div className="loop-slider" style={{ "--duration": `${duration}ms`, "--direction": direction }}>
      <div className="inner">
        {items.concat(items).map((item, index) => (
          <div key={index} className={`tag-stack ${item.className}`}>
            {item.icon}
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );