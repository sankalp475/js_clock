const hour = document.querySelector('.hour-hand')
const min = document.querySelector('.min-hand')
const second = document.querySelector('.second-hand')

function clock() {
	const _hour_ = document.querySelector('.-hh-')
	const _min_ = document.querySelector('.-mm-')
	const _second_ = document.querySelector('.-ss-')
	const now = new Date();
	const HH = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
	const MM = now.getMinutes();
	const SS = now.getSeconds();

	const SS_degrees = 6 * SS;
	const MM_degrees = 6 * MM;
	const HH_degrees = 30 * HH + MM / 2;
	hour.style.setProperty('--hh', `${HH_degrees}deg`)
	min.style.setProperty('--mm', `${MM_degrees}deg`)
	second.style.setProperty('--ss', `${SS_degrees}deg`)
}
setInterval(clock,1000)
clock()