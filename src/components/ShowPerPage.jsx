import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShowPerPage = ({ optVal, onChange }) => {
  return (
    <div className="flex gap-6 items-center">
      <label htmlFor="opValSelect">Show per page</label>

      <Select id="opValSelect" onValueChange={onChange} defaultValue={optVal}>
        <SelectTrigger className="w-[120px!]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={5}>5</SelectItem>
          <SelectItem value={10}>10</SelectItem>
          <SelectItem value={15}>15</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ShowPerPage;
