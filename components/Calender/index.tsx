import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import { Exams } from "@/types/exams";
const Calendar = () => {
  const date: any = new Date();
  const monthNames = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  const dayNames = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstDayName = dayNames[firstDay.getDay()];
  const firstDayIndex: number = dayNames.indexOf(firstDayName);
  const month = monthNames[date.getMonth()];
  const monthDayIndex: number = monthNames.indexOf(month) + 1;
  const exams: Exams[] = [
    {
      title: "Redesign Website",
      desc: "1 Dec - 2 Dec",
      month: 5,
      day: 3,
    },
    {
      title: "Redesign Website",
      desc: "1 Dec - 2 Dec",
      month: 5,
      day: 12,
    },
    {
      title: "Redesign Website",
      desc: "1 Dec - 2 Dec",
      month: 5,
      day: 24,
    },
  ];

  const items = Array.from(
    {
      length:
        new Date(
          new Date().getFullYear(),
          monthNames.indexOf(month) + 1,
          0
        ).getDate() + firstDayIndex,
    },
    (_, index) => {
      if (index >= firstDayIndex) {
        return (
          <td
            key={index}
            className="ease relative border border-stroke p-2 transition duration-500 hover:bg-gray md:p-6 h-40 bg-[#f9f9f9]"
          >
            <span className="font-medium text-black dark:text-white">
              {index + 1 - firstDayIndex}
            </span>
            <div className="flex flex-col relative top-3 -left-6">
              <div className="group h-16 w-full py-1 md:h-30">
                {exams.map(
                  (item, examIndex) =>
                    monthDayIndex === item.month &&
                    index - firstDayIndex + 1 === item.day && (
                      <div
                        className="max-w-[120%] overflow-hidden event invisible absolute left-2 z-99 mb-1 flex w-[200%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 md:visible md:w-[190%] md:opacity-100 line-clamp-1 text-nowrap"
                        key={examIndex}
                      >
                        <div className="flex flex-col">
                          <span className="event-name text-sm font-semibold text-black dark:text-white">
                            {item.title}
                          </span>
                          <span className="time text-sm font-medium text-black dark:text-white">
                            {item.desc}
                          </span>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </td>
        );
      } else {
        return (
          <td
            key={index}
            className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray md:h-25 md:p-6 xl:h-full"
          ></td>
        );
      }
    }
  );

  return (
    <div className="mx-auto max-w-7xl">
      <Breadcrumb pageName={`${month} Ayı Sınav Programı`} />
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default d">
        <table className="w-full">
          <thead>
            <tr className="grid grid-cols-7 rounded-t-sm bg-primary text-white">
              <th className="flex h-15 items-center justify-center rounded-tl-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Pazar </span>
                <span className="block lg:hidden"> Sun </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Pazartesi </span>
                <span className="block lg:hidden"> Mon </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Salı </span>
                <span className="block lg:hidden"> Tue </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Çarşamba </span>
                <span className="block lg:hidden"> Wed </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Perşembe </span>
                <span className="block lg:hidden"> Thur </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Cuma </span>
                <span className="block lg:hidden"> Fri </span>
              </th>
              <th className="flex h-15 items-center justify-center rounded-tr-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Cumartesi </span>
                <span className="block lg:hidden"> Sat </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="grid grid-cols-7">{items}</tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
