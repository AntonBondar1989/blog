import { useState, useRef, useEffect } from "react";
import Box from '@mui/material/Box/Box';
import { padTime } from '../../helpers/padTime'


export const Timer: React.FC = () => {
    const [timerDays, setTimerDays] = useState<string>('00')
    const [timerHours, setTimerHours] = useState<string>('00')
    const [timerMinutes, setTimerMinutes] = useState<string>('00')
    const [timerSeconds, setTimerSeconds] = useState<string>('00')

    let interval = useRef<NodeJS.Timeout | null>(null)

    const startsTimer = () => {
        const countdownTime = new Date("Mar 13 2023 11:00:00").getTime()

        interval.current = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdownTime - now


            const days = padTime(Math.floor(distance / (1000 * 60 * 60 * 24)));
            const hours = padTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const minutes = padTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            const seconds = padTime(Math.floor((distance % (1000 * 60)) / 1000));

            if (distance < 0) {
                //stop our timer
                clearInterval(interval.current as NodeJS.Timeout)
            } else {
                //updaet timer
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }

        }, 1000)
    }

    useEffect(() => {
        startsTimer()
        return () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        }
    })

    return (
        <Box sx={{ display: 'flex', color: 'red', justifyContent: 'center', height: 100, alignItems: 'center', fontSize: 80 }}>
            <div >
                <span >{timerDays}</span>
                <span>:</span>
                {/* <span>Days</span> */}
            </div>
            <div >
                <span >{timerHours}</span>
                <span>:</span>
                {/* <span>Hours</span> */}
            </div>
            <div >
                <span >{timerMinutes}</span>
                <span>:</span>
                {/* <span>Minutes</span> */}
            </div>
            <div >
                <span >{timerSeconds}</span>
                {/* <span>Seconds</span> */}
            </div>
            {/* <Button variant="contained" disableElevation>
                Disable elevation
            </Button> */}
        </Box>
    );
};


