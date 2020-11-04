import React from 'react'
import PropTypes from 'prop-types'
import { Link as InternalLink } from 'gatsby'

const Link = ({ children, href, className, target, ...rest }) => {
	const linkClassName = `${href === '#' ? 'empty-link' : ''} ${className}`
	if (href.startsWith('/')) {
		return (
			<InternalLink
				to={href}
				className={linkClassName}
				target={target || '__self'}
				{...rest}
			>
				{children}
			</InternalLink>
		)
	}
	return (
		<a
			rel="noopener noreferrer"
			target={target || '__blank'}
			href={href}
			className={linkClassName}
			{...rest}
		>
			{children}
		</a>
	)
}

Link.propTypes = {
	href: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	className: PropTypes.string,
	target: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.node,
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.arrayOf(PropTypes.element),
	]),
}

export default Link
