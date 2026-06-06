import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TaskDetails() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-green-950  p-6 flex justify-center">
      <div className="w-full max-w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            className="absolute left-0 top-o bottom-0 text-slate-100"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon size={20} />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Task Details
          </h1>
        </div>

        <div className="rounded-md bg-green-900 border border-green-800 p-2 min-h-14">
          <h2
            className="text-xl font-bold text-green-50 "
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <div
            className=" text-green-50 "
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
