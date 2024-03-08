package com.pkg.appointmentscheduler;

import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ActiveProfiles;

@Target(TYPE)
@Retention(RUNTIME)
@ActiveProfiles("test")
@Import({ AppointmentSchedulerTestCtx.class})
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public @interface AppointmentSchedulerTest {
}
