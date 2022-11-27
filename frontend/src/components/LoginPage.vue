<!--<template>
    <div>
        <div>
            <Form @submit="handleLogin" :validation-schema="schema">
                <div class="form-group">
                    <label for="username">Username</label>
                    <Field name="username" type="text" class="form-control" />
                    <ErrorMessage name="username" class="error-feedback" />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <Field name="password" type="text" class="form-control" />
                    <ErrorMessage name="password" class="error-feedback" />
                </div>

                <div class="form-group">
                    <button class="btn" :disabled="loading">
                        <span
                              v-show="loading"
                              class="spinner-border"
                        ></span>
                        <span>Login</span>
                    </button>
                </div>

                <div class="form-group">
                    <div v-if="message" class="alert" role="alert">
                        {{ message }}
                    </div>
                </div>
            </Form>
        </div>
    </div>
</template>

<script>
    import { Form, Field, ErrorMessage } from "vee-validate";
    import * as yup from "yup";

    export default {
        name: "Login"
        }

</script>-->