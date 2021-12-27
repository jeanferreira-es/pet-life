import React from 'react'
import { Card, Text } from '../../global/styles'

export default function index({ desc }) {
    return (
        <Card horizontalAlign v10h15>
            <Text small>{desc}</Text>
        </Card>
    )
}
