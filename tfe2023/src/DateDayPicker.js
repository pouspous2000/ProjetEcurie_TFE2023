// Import DayPicker 
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

// Import DatePicker 
import  DatePicker  from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function DateDayPicker() {

    const [selected, setSelected] = useState(new Date());
    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
    
    return (
        <>
            <DatePicker
                ClassName="datePicker"
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart // tells this DatePicker that it is part of a range*
                startDate={startDate}
            />
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
            />
        </>


    )
}
export default DateDayPicker;