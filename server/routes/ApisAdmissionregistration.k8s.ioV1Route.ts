// Path: routes/ApisAdmissionregistration.k8s.ioV1Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { getAdmissionregistrationV1APIResources } from '../controllers/AdmissionregistrationV1Controller'

import {router} from './router';

router.get('/apis/admissionregistration.k8s.io/v1/', getAdmissionregistrationV1APIResources)

export default router;
