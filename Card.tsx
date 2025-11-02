import React from 'react'
import Image from 'next/image'

interface CardProps {
  title: string
  description: string
  image: string
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transit

