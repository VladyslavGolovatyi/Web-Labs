package spring_backend;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode
public final class Phone {
    private Long phoneId;
    private String model;
    private int price;
}
