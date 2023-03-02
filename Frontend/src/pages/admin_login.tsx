import React from 'react'
import {LoginButton} from '../components/LoginButton'
import { config } from '../../config'

type AdminLoginProps = {
    EMAIL: string
}

export default function admin_login( props: AdminLoginProps ) {
  return (
    <LoginButton EMAIL={props.EMAIL} />
  )
}

export function getStaticProps() {
    return {
      props: {
        EMAIL: config.EMAIL
      }
    }
  }