import React from 'react';

/**
 * 
 * @param {{
 *  width ?: number;
 *  height ?: number
 * }} props
 */
export default function Room(props = { width: 24, height: 24 }) {
  return (
    <svg width={props.width} height={props.height} viewBox="0 0 24 24" focusable="false" class=" NMm5M">
      <path d="M12 3L4 9v12h16V9l-8-6zm6 16h-3v-6H9v6H6v-9l6-4.5 6 4.5v9z" />
    </svg>
  )
}