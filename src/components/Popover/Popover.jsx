import React from 'react'
import { Fragment } from 'react-is'
import * as S from './popover.style'
import PropTypes from 'prop-types'

export default function Popover({ children, active }) {
  return (
    <div>
      <Fragment>
        {active && (
          <S.Drawer>
            <S.PopoverArrow />
            <S.PopoverContent>{children}</S.PopoverContent>
          </S.Drawer>
        )}
      </Fragment>
    </div>
  )
}

Popover.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}
