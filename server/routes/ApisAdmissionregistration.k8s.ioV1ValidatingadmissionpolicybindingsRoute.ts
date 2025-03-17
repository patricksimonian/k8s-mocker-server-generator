// Path: routes/ApisAdmissionregistration.k8s.ioV1ValidatingadmissionpolicybindingsRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicyBinding } from '../controllers/AdmissionregistrationV1Controller'
import { listAdmissionregistrationV1ValidatingAdmissionPolicyBinding } from '../controllers/AdmissionregistrationV1Controller'
import { createAdmissionregistrationV1ValidatingAdmissionPolicyBinding } from '../controllers/AdmissionregistrationV1Controller'

import {router} from './router';

router.delete('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings', deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicyBinding)

router.get('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings', listAdmissionregistrationV1ValidatingAdmissionPolicyBinding)

router.post('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings', createAdmissionregistrationV1ValidatingAdmissionPolicyBinding)

export default router;
