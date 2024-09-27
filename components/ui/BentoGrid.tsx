import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  img,
  spareImg,
  imgClassName,
  titleClassName,
  id
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  spareImg?: string;
  titleClassName?: string;
  imgClassName?: string;
  id?: number
}) => {
  return (
    <div
      className={cn(
        "relative row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border  justify-between flex flex-col space-y-4",
        className
      )}
      style={{ background: 'rgb(4,7,29)', backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)", }}
    >
      {header}
      <div className={`${id === 6}&& flex justify-center h-full`}>
        <div className="w-full h-full absolute">
          {img && <img src={img} alt={img} className={cn(imgClassName, "object-cover object-center")} />}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && <img src={spareImg} alt={spareImg} className={"object-cover object-center w-full h-full"} />}
        </div>
        {id === 6 && <BackgroundGradientAnimation>
          <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
        </BackgroundGradientAnimation>}

        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10')}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm sm:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
        </div>
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}


      </div>
    </div>
  );
};
