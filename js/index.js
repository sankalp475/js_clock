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
	const SS_degrees = ((SS / 60) * 360) + 90
	const MM_degrees = ((MM / 60) * 360) + ((SS/60)*6) + 90
	const HH_degrees = (((HH == 0? 12 : HH) / 12) * 360) + ((MM/60)*30) + 90;

	hour.style.setProperty('--hh', `${HH_degrees}deg`)
	min.style.setProperty('--mm', `${MM_degrees}deg`)
	second.style.setProperty('--ss', `${SS_degrees}deg`)

	_hour_.innerHTML = HH == 0? 12 : HH
	_min_.innerHTML = MM
	_second_.innerHTML = SS
	const time = {
		h : HH == 0? 12 : HH,
		m: MM,
		s: SS,
	}
    console.log(time)
}
setInterval(clock,1000)
clock()