// Path: routes/ApisAdmissionregistration.k8s.ioV1beta1Validatingadmissionpolicybindings{name}Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { deleteAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding } from '../controllers/AdmissionregistrationV1beta1Controller'
import { readAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding } from '../controllers/AdmissionregistrationV1beta1Controller'
import { patchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding } from '../controllers/AdmissionregistrationV1beta1Controller'
import { replaceAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding } from '../controllers/AdmissionregistrationV1beta1Controller'

import {router} from './router';

router.delete('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings/:name', deleteAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding)

router.get('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings/:name', readAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding)

router.patch('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings/:name', patchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding)

router.put('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings/:name', replaceAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding)

export default router;
