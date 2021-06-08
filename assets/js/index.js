const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

const tabActive = $('.tab-item.active')
const line = $('.tab-line')

document.addEventListener('DOMContentLoaded', () => {
	line.style.left = tabActive.offsetLeft + 'px'
	line.style.width = tabActive.offsetWidth + 'px'

	tabs.forEach((tab, index) => {
		const pane = panes[index]
		tab.onclick = function() {

			$('.tab-item.active').classList.remove('active')
			$('.tab-pane.active').classList.remove('active')
			this.classList.add('active')
			pane.classList.add('active')

			line.style.left = this.offsetLeft + 'px'
			line.style.width = this.offsetWidth + 'px'
		}
	})

	setInterval(() => {
		const tabCurrent = $('.tab-item.active')
		const paneCurrent = $('.tab-pane.active')

		const tabNext = tabCurrent.nextElementSibling
		const paneNext = paneCurrent.nextElementSibling

		tabCurrent.classList.remove('active')
		paneCurrent.classList.remove('active')

		if(tabNext.classList[0] == 'tab-line') {
			tabs[0].classList.add('active')
			panes[0].classList.add('active')
			line.style.left = tabs[0].offsetLeft + 'px'
			line.style.width = tabs[0].offsetWidth + 'px'
		}
		else {
			tabNext.classList.add('active')
			paneNext.classList.add('active')
			line.style.left = tabNext.offsetLeft + 'px'
			line.style.width = tabNext.offsetWidth + 'px'
		}
	},3000)
})


