import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

type Props = {
  name: string;
  time: string;
  info: string;
  showButton?: boolean;
};

export default function BusinessInfo({
  name,
  time,
  info,
  showButton = false,
}: Props) {
  return (
    <div className="w-full flex flex-col bg-white rounded shadow p-4 space-y-4 sm:space-y-0">
      <div className="w-full flex flex-col justify-start p-4">
        <p className="text-xl font-bold text-gray-600 text-start mb-1">{name}</p>
        <p className="text-xl text-start text-gray-400 mb-3">{time}</p>
        <p className="text-xl text-start leading-loose text-black whitespace-pre-line">
          {info}
        </p>
              {showButton && (
                  <div className="mt-6 flex flex-row justify-center">
                      <Button
            className="w-full max-w-40 "
            variant="contained"
            startIcon={<DownloadIcon />}
            href="https://drive.google.com/drive/folders/1qfiPj3G-7Vs85R00dFNqn54yRFUtZRg6"
            target="_blank"
            sx={{
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            ダウンロード
          </Button>
                  </div>
          
        )}
      </div>
    </div>
  );
}
