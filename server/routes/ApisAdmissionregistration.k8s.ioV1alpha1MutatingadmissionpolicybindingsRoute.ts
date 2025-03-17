// Path: routes/ApisAdmissionregistration.k8s.ioV1alpha1MutatingadmissionpolicybindingsRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { deleteAdmissionregistrationV1alpha1CollectionMutatingAdmissionPolicyBinding } from '../controllers/AdmissionregistrationV1alpha1Controller'
import { listAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding } from '../controllers/AdmissionregistrationV1alpha1Controller'
import { createAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding } from '../controllers/AdmissionregistrationV1alpha1Controller'

import {router} from './router';

router.delete('/apis/admissionregistration.k8s.io/v1alpha1/mutatingadmissionpolicybindings', deleteAdmissionregistrationV1alpha1CollectionMutatingAdmissionPolicyBinding)

router.get('/apis/admissionregistration.k8s.io/v1alpha1/mutatingadmissionpolicybindings', listAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding)

router.post('/apis/admissionregistration.k8s.io/v1alpha1/mutatingadmissionpolicybindings', createAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding)

export default router;
