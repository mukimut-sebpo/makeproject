const process = require('node:process');
const cp = require('child_process');
const ticketNo = process.argv[process.argv.length - 1];

cp.exec('mkdir ' + ticketNo, (e, o, stdE) => {
    if(e || stdE) {
        console.log('folder creattion error')
        return;
    }

    const value = Number.parseInt(ticketNo);
	const command = ticketNo < 2000? 'cd ' + ticketNo + ' && git clone git@github.com:sebpo1/APCS_' + ticketNo + '.git' : 'cd ' + ticketNo + ' && git clone git@github.com:sebpo1/USCS_' + ticketNo + '.git';
    console.log(command);
    
    cp.exec(command, (a, b, c) => {
        if(a) {
            console.log(a)
        }
        if(b) {
            console.log(b)
        }
        if(c) {
            console.log(c)
        }
    })
    
});
