// Path: routes/ApisAdmissionregistration.k8s.ioV1beta1WatchValidatingadmissionpolicybindingsRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingList } from '../controllers/AdmissionregistrationV1beta1Controller'

import {router} from './router';

router.get('/apis/admissionregistration.k8s.io/v1beta1/watch/validatingadmissionpolicybindings', watchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingList)

export default router;
