// Path: routes/ApisAdmissionregistration.k8s.ioV1alpha1WatchMutatingadmissionpolicies{name}Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchAdmissionregistrationV1alpha1MutatingAdmissionPolicy } from '../controllers/AdmissionregistrationV1alpha1Controller'

import {router} from './router';

router.get('/apis/admissionregistration.k8s.io/v1alpha1/watch/mutatingadmissionpolicies/:name', watchAdmissionregistrationV1alpha1MutatingAdmissionPolicy)

export default router;
