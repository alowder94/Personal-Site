import React from 'react'
import {AdminToolLoginButton} from '../components/AdminToolLoginButton'
import { config } from '../../config'

type AdminLoginProps = {
    EMAIL: string
}

export default function admin_login( props: AdminLoginProps ) {
  return (
    <AdminToolLoginButton EMAIL={props.EMAIL} />
  )
}

export function getStaticProps() {
    return {
      props: {
        EMAIL: config.EMAIL
      }
    }
  }