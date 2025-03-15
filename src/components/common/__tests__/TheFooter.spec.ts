import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TheFooter from '../TheFooter.vue'

describe('TheFooter', () => {
    let wrapper: any

    beforeEach(() => {
        wrapper = mount(TheFooter)
    })

    describe('Component Structure', () => {
        it('renders the component', () => {
            expect(wrapper.exists()).toBe(true)
        })

        it('contains footer element', () => {
            expect(wrapper.find('footer').exists()).toBe(true)
        })
    })

    describe('Content', () => {
        it('displays current year in copyright notice', () => {
            const currentYear = new Date().getFullYear()
            expect(wrapper.text()).toContain(currentYear.toString())
        })

        it('includes copyright text', () => {
            expect(wrapper.text()).toContain('All rights reserved')
        })
    })

    describe('Computed Properties', () => {
        it('currentYear returns the correct year', () => {
            const currentYear = new Date().getFullYear()
            expect(wrapper.vm.currentYear).toBe(currentYear)
        })
    })
}) 