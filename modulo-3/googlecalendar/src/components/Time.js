// aggiungere un evento cliccando sull'orario
//  verranno mostrati i dati dell'evento sotto ad orario
// un evento può essere cancellato o modificato dall'orario con finestra popup

import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Time({ time }) {

    const [open, setOpen] = useState(false)
    const [event, setEvent] = useState("")
    const [place, setPlace] = useState("")
    const [eventInfos, setEventInfos] = useState({})
    const [noEvents, setNoEvents] = useState(true)

    let timeColor = noEvents ? 'free' : 'busy'

    function openDialog() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }

    function addEvent() {
        setEventInfos({ event: event, place: place })
        setOpen(false)
        setNoEvents(false)
    }

    function deleteEvent() {
        setEventInfos({})
        setOpen(false)
        setNoEvents(true)
    }

    return (
        <div>
            <button className={timeColor} onClick={openDialog}>{time}:01 - {time + 1}:00</button>
            <div className='event'>
                <span>{eventInfos.event} {eventInfos.place}</span>
            </div>
            {noEvents && <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add an event</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Write the event name and place
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="event"
                        label="Event"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setEvent(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="event"
                        label="Place"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setPlace(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addEvent}>Add</Button>
                </DialogActions>
            </Dialog>}
            {!noEvents && <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Remove or modify the event</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Modify the description of the event or delete it
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="event"
                        label="Event"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={event}
                        onChange={(e) => setEvent(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="event"
                        label="Place"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addEvent}>Modify</Button>
                    <Button onClick={deleteEvent}>Delete</Button>
                </DialogActions>
            </Dialog>}
        </div>
    )
}

